const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-tokena-blue to-tokena-dark-secondary/70'>
      {children}
    </div>
  )
}

export default AuthLayout
