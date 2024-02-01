export default function Messages(){
    return (
        <div className="flex-1 overflow-y-scroll p-3">
            {
                [...Array(100)].map(x => {
                    return (
                        <p>Message: ${x}</p>
                    );
                })
            }
        </div>
    );
}