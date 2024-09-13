'use client'

import React, { useRef, useState } from 'react'

const aula_enviando_arquivos = () => {
    const[legendInput, setLegendInput] = useState('')
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileSend = async () => {
        if (fileInputRef.current?.files && fileInputRef.current.files.length > 0) {
            const fileItem = fileInputRef.current.files[0]
            const allowed = ['image/jpg', 'image/jpeg', 'image/png']

            if(allowed.includes(fileItem.type)) {

                const data = new FormData();
                data.append('image', fileItem)
                data.append('legend', legendInput)

                const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    headers: {
                        'Content_type': 'multipart/form-data'
                    },
                    body: data
                });
                const json = await res.json();
                console.log(json)

            } else {
                alert("Aquivo incompatível")
            }
            
        } else {
            alert('Selecione um arquivo')
        }
    }

  return (
    <div className="container w-screen h-screen flex flex-col justify-center items-center mx-auto">
        <h1 className="text-3xl">Upload de imagens</h1>

        <div className="flex max-w-md border border-white p-3 rounded-md flex-col gap-3 mt-4">
            <input 
                ref={fileInputRef}
                type="file"
             />
            <input 
                type="text" 
                placeholder="Digite uma legenda"
                className="p-3 bg-white rounded-md "
                value={legendInput}
                onChange={e => setLegendInput(e.target.value)}
            />
            <button onClick={handleFileSend}>
                Enviar uma mensagem
            </button>
        </div>
    </div>
  )


}

export default aula_enviando_arquivos