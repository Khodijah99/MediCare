
function ActionButtons({action}:any) {
  return (
    <div className="button p-4 max-w-36 text-center my-4 cursor-pointer hover:bg-white hover:text-blue-light font-semibold text-white bg-blue-light rounded-md">
                    {action}
     </div>
  )
}

export default ActionButtons
