

const AddTicketForm = () => {
    return(
        <div className="fixed inset-0 flex items-center justify-between bg-gray-500 bg-opacity-60">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md text-left">
                <h1 className="text-center">Thêm vé</h1>
                <form className="px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4 flex items-center ">
                        <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="ticketname">Tên vé</label>
                        <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" id="ticketname" placeholder="Ex: Vé thường" required/>
                    </div>
                    <div className="mb-4 flex items-center ">
                        <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="ticketname">Loại vé</label>
                        <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" id="ticketname" placeholder="Ex: Vé thường" required/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTicketForm;