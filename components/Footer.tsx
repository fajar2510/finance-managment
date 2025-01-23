import Image from 'next/image'
import { logoutAccount } from '@/lib/actions/user.actions'
import { useRouter } from 'next/navigation'

const Footer = ({ user, type = 'dekstop' }: FooterProps) => {
   const router = useRouter()
   console.log('User data:', user)

   const handleLogOut = async () => {
      const loggedOut = await logoutAccount()

      if (loggedOut) router.push('/sign-in')
   }
   return (
      <footer className="footer">
         <div
            className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}
         >
            <p className="text-xl font-bold text-gray-700">{user?.name[0]}</p>
         </div>

         <div
            className={
               type === 'mobile' ? 'footer_email-mobile' : 'footer_email'
            }
            style={{
               maxWidth: '170px',
               overflow: 'hidden',
               whiteSpace: 'nowrap',
               textOverflow: 'ellipsis',
            }}
         >
            <h1 className="text-14 truncate font-semibold text-gray-700">
               {user?.name}
            </h1>
            <p className="text-14 truncate font-normaal text-gray-600">
               {user?.email}
            </p>
         </div>

         <div
            className="footer_image"
            onClick={handleLogOut}
         >
            <Image
               src="icons/logout.svg"
               fill
               alt="finance"
            />
         </div>
      </footer>
   )
}

export default Footer
