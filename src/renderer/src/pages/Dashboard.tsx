import HeaderPage from '@renderer/components/HeaderPage'

function Dashboard(): JSX.Element {
  return (
    <div className="flex flex-col  text-sm">
      <HeaderPage>
        <h4 className="text-lg font-normal">Painel Administrativo</h4>
        <p className="font-light text-sm">Resumo dos de toda a aplicação</p>
      </HeaderPage>
    </div>
  )
}

export default Dashboard
