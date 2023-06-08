import React from 'react'
import './Advertisement.css'
function Advertisement() {
  const rowOne = [
    {
      id:'1',
      image : 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/5/7/df7cd044-78be-4111-b738-7e06b843fda81683462027956-img_02.jpg'
    },
    {
      id:'2',
      image : 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/5/7/9d3cca5c-270f-4d73-8f1a-bacef7e84af21683462027969-img_03.jpg'
    },
    {
      id:'3',
      image : 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/5/7/32b29cae-f25b-48ce-801f-0034a645a52b1683462027979-img_04.jpg'
    },
    {
      id:'4',
      image : 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/5/7/c4a2f220-029f-4d02-9881-5b0cdd1a0f9a1683462027991-img_05.jpg'
    }
  ]
  const rowTwo = [
    {
      id : '1',
      image : 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/5/7/bc81f0d1-8907-46fe-8511-2724d690ea481683462028002-img_06.jpg'
    },
    {
      id : '2',
      image : 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/5/7/23e5ce77-0245-468e-986e-8ce60f5e09161683462028015-img_07.jpg'
    },
    {
      id : '3',
      image : 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/5/7/e1e05dfc-5558-4912-a2b3-7e959316df4f1683462028026-img_08.jpg'
    },
    {
      id : '4',
      image : 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/5/7/bd3c8cad-a685-4432-85bc-1f404adedb9d1683462028038-img_09.jpg'
    },
  ]
  const rowThree = [
    {
      id : '1',
      image : 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/5/7/90344d96-c047-44fe-8a5d-4e29228474b21683462028049-img_10.jpg'
    },
    {
      id : '2',
      image : 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/5/7/2711816c-c802-4ba4-aa74-30bc623b11b01683462028062-img_11.jpg'
    },
    {
      id : '3',
      image : 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/5/7/a9ef7c93-7a90-4598-a095-3eea86621f291683462028069-img_12.jpg'
    },
    {
      id : '4',
      image : 'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2023/5/7/7bbebb43-039d-4909-a273-bd6a85198c6b1683462028076-img_13.jpg'
    }
  ]
  return (
    <div className='ad'>
      <div className='ad__rowone'>
        {
          rowOne.map(element => {
            return(
              <div key={element.id}>
                <a href='www.google.com'>
                  <img alt='none' className='ad__rowone__image' src={element.image}></img>
                </a>
              </div>
            )
          })
        }
      </div>
      <div className='ad__rowtwo'>
        {
          rowTwo.map(element => {
            return(
              <div key={element.id}>
                <a href='www.google.com'>
                  <img alt='none' className='ad__rowone__image' src={element.image}></img>
                </a>
              </div>
            )
          })
        }
      </div>
      <div className='ad__rowthree'>
        {
          rowThree.map(element => {
            return(
              <div key={element.id}>
                <a href='www.google.com'>
                  <img alt='n' className='ad__rowone__image' src={element.image}></img>
                </a>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Advertisement