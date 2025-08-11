import Link from 'next/link'
import Image from 'next/image';

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Image src="https://images.unsplash.com/photo-1605460375648-278bcbd579a6" width={500} height={200} alt='A beautiful English Setter'/>
      <Link href="/">Return Home</Link>
    </div>
  )
}