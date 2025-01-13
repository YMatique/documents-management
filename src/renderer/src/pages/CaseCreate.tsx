import ButtonBack from '@renderer/components/Buttons/ButtonBack'
import HeaderPage from '@renderer/components/HeaderPage'

const CaseCreate: React.FC = () => {
  return (
    <div className="flex flex-col  text-sm h-full">
      <HeaderPage className="mb-8">
        <div className="flex">
          <div className="flex w-1/2 flex-col">
            <ButtonBack onClick={() => {}} className="" />
            <h4 className="text-lg font-normal">Cadastrar Casos</h4>
            <p className="font-light text-sm">Preencha todos os campos</p>
          </div>
          <div className="flex justify-center items-end mr-3 w-1/2 flex-col">
            {/* <ButtonPrimary label="Cadastrar" className="" onClick={openModal} /> */}
          </div>
        </div>
      </HeaderPage>
    </div>
  )
}

export default CaseCreate
