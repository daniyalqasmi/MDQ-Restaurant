import BestSelling from '@/components/bestselling'
import Categories from '@/components/categories'
import Hero from '@/components/hero'
import Mostpopular from '@/components/mostpopular'
import Promotion from '@/components/promotion'
import Services from '@/components/services'

export default function Home() {
  return (
    <div className='px-4'>
      <Hero/>
      <Mostpopular/>
      <Services/>
      <Promotion/>
      <Categories/>
      <BestSelling/>
    </div>
  )
}
