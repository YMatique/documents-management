/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prettier/prettier */
import ButtonPrimary from '@renderer/components/Buttons/ButtonPrimary'
import DocumentList from '@renderer/components/Documents/DocumentsList'
import HeaderPage from '@renderer/components/HeaderPage'

const Documents: React.FC = () => {
  const handleAddDocument = () => {}
  return (
    <>
      {' '}
      <div className="flex flex-col  text-sm">
        <HeaderPage className="mb-8">
          <div className="flex">
            <div className="flex w-1/2 flex-col">
              <h4 className="text-lg font-normal">Documentos</h4>
              <p className="font-light text-sm">Todos documentos</p>
            </div>
            <div className="flex justify-center items-end mr-3 w-1/2 flex-col">
              <ButtonPrimary label="Cadastrar" className="" onClick={handleAddDocument} />
            </div>
          </div>
        </HeaderPage>
        <div className="flex flex-col">
          <DocumentList />
        </div>
      </div>
    </>
  )
}

export default Documents
