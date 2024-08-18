import { Section } from 'lucide-react'
import React from 'react'
import HeaderBox from '@/components/ui/headerbox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'

const Home = () => {
  const loggedIn = {firstName : 'Adrian'};
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
      </header>
      <TotalBalanceBox 
      accounts = {[]}
      totalBanks={1}
      totalCurrentBalance={1250.35}
      />

    </div>
   </section>
  )
}

export default Home
