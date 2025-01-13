// import ButtonPrimary from '@renderer/components/Buttons/ButtonPrimary'
import HeaderPage from '@renderer/components/HeaderPage'

const Configurations: React.FC = () => {
  return (
    <>
      {' '}
      <div className="flex flex-col  text-sm">
        <HeaderPage className="mb-8">
          <div className="flex">
            <div className="flex w-1/2 flex-col">
              <h4 className="text-lg font-normal">Configuração</h4>
              {/* <p className="font-light text-sm">Usuários do sistema</p> */}
            </div>
            <div className="flex justify-center items-end mr-3 w-1/2 flex-col">
              {/* <ButtonPrimary label="Cadastrar" className="" onClick={handleAddUser} /> */}
            </div>
          </div>
        </HeaderPage>
        <div className="flex flex-col"></div>
      </div>
    </>
  )
}

export default Configurations
