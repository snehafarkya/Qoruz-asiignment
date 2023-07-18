import React from 'react'

export default function Faq() {
const data = [
  {
    title: "Category search simplified",
    content:"Laboris qui labore cillum culpa in sunt quis sint veniam.Dolore ex aute deserunt esse ipsum elit aliqua. Aute quisminim velit nostrud pariatur culpa magna in aute."
  },
  {
    title: "Run data driven campaigns",
    content:"Laboris qui labore cillum culpa in sunt quis sint veniam.Dolore ex aute deserunt esse ipsum elit aliqua. Aute quisminim velit nostrud pariatur culpa magna in aute."
  },
  {
    title: "be double sure with qoruz score",
    content:"Laboris qui labore cillum culpa in sunt quis sint veniam.Dolore ex aute deserunt esse ipsum elit aliqua. Aute quisminim velit nostrud pariatur culpa magna in aute."
  },
]

  return (
    <div>
      <div>
      <section className='faq-section'>
          <div>
            <div class="">
                {data.map((item)=>{
                  return <>
              <details className='faq-title'>

                  <summary class="">
                  {item.title}
                  </summary>
                  <span className='content'>
                    {item.content}
                  </span>
              </details>

                  </>
                })}
            </div>
        </div>
      </section>
    </div>
    </div>
  )
}
