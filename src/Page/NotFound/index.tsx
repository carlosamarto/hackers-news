// Wouter
import { Link } from 'wouter'

// Styles
import { button, title } from './notfound.css'
import { section } from '../Stories/stories.css'

export default function NotFound () {
  return (
    <>
      <section className={section}>
        <h2 className={title}>Page not found 😞</h2>

        <Link href="/" className={button}>
          Go Back
        </Link>
      </section>
    </>
  )
}
