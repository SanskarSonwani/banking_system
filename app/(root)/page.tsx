import { Section } from 'lucide-react'
import React from 'react'
import HeaderBox from '@/components/ui/headerbox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import RightSidebar from '@/components/ui/RightSidebar'

const Home = () => {
  const loggedIn = {firstName : 'Adrian', lastName:'JSM', email:'AdJSM@gmail.com'};
  return (
   <section className="home">
    <div className="home-content">
      <header className='home-header'>
       <HeaderBox
       type="greeting"
       title="Welcome"
       user={loggedIn?.firstName||'Guest'}
       subtext="Acces and manage your account and transactonns efficiently."
       />
        <TotalBalanceBox 
      accounts = {[]}
      totalBanks={1}
      totalCurrentBalance={1250.35}
      />
      </header>
     Recent Transactions

    </div>
    <RightSidebar user={loggedIn}
    transactions={[]}
    banks = {[{currentBalance: 123.50},{currentBalance: 150.50}]}
    />
   </section>
  )
}

export default Home
