import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const Home = async () => {
   const loggedIn = await getLoggedInUser()

   return (
      <section className="home">
         <div className="home-content">
            <header className="home-header">
               <HeaderBox
                  type="greeting"
                  title="Welcome"
                  user={loggedIn?.name || 'Guest'}
                  subtext="Acces and manage your account and transactions efficiently"
               />

               <TotalBalanceBox
                  accounts={[]}
                  totalBanks={1}
                  totalCurrentBalance={1250000}
               />
            </header>
            RECENT TRANSACTIONS
         </div>

         <RightSidebar
            user={loggedIn}
            transaction={[]}
            banks={[{ currentBalance: 1235000 }, { currentBalance: 550000 }]}
         />
      </section>
   )
}

export default Home
