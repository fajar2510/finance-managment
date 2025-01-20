import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
   const loggedIn = {
      firstName: 'Fajar',
      lastName: 'Abdurohman',
      email: 'fajarabd25@gmail.pro',
   }

   return (
      <section className="home">
         <div className="home-content">
            <header className="home-header">
               <HeaderBox
                  type="greeting"
                  title="Welcome"
                  user={loggedIn?.firstName || 'Guest'}
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
