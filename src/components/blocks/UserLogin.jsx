// import { useQuery } from '@tanstack/react-query'
import EmptyUser from '../icons/emptyUser'

function UserLogin() {
  // const { data: imoogi, refetch } = useQuery(['imoogi'], getImoogi, {
  //   refetchOnWindowFocus: false,
  //   enabled: false // disable this query from automatically running
  // });
  //
  // const fetchImoogi = () => {
  //   refetch();
  // };

  return (
    <button className='user-login flex h-10 gap-2.5'>
      <EmptyUser />

      <span>
        Login
      </span>
    </button>
  )
}

export default UserLogin

