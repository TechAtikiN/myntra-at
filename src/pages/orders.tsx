import { getSession, useSession } from 'next-auth/react'
import { Navbar, Order } from '../components'
import { orderBy, getDocs, query, collectionGroup } from 'firebase/firestore';

import db from '@/firebase'
import moment from 'moment'

interface Props {
  id: string;
  amount: number;
  amountShipping: number;
  items: any;
  timestamp: number;
  images: string[]
}

const Orders = ({ orders }: any) => {
  console.log(orders)
  const session = useSession()

  return (
    <div>
      <Navbar />
      <main className='max-w-screen-lg mx-auto p-10 text-gray-700'>
        <h1 className='text-3xl border-b-4 font-semibold border-red-600 rounded-lg w-52 pb-2'>Your Orders</h1>

        {session ? (
          <h2 className='font-semibold text-xl py-5'>{orders.length} Orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}

        <div className='space-y-9 p-10'>
          {orders?.map(({ id, amount, amountShipping, items, timestamp, images }: Props) => (
            <Order
              key={id}
              id={id}
              amount={amount}
              amountShipping={amountShipping}
              items={items}
              timestamp={timestamp}
              images={images}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Orders

export async function getServerSideProps(context: any) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

  const session = await getSession(context);

  if (!session) {
    return {
      props: {}
    }
  }

  const userEmail = session?.user?.email;
  if (!userEmail) {
    console.log('User is not desfined')
  }

  const ordersCollection = collectionGroup(db, 'orders');
  const querySnapshot = await query(ordersCollection, orderBy('timestamp', 'desc'))

  const stripeOrders = await getDocs(querySnapshot);
  // console.log(stripeOrders)

  const orders = await Promise.all(
    stripeOrders.docs.map(async (order: any) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100
        })
      ).data
    }))
  )
  return {
    props: {
      orders
    }
  }
}
