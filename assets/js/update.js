





let runScripts = () => {
    let chart_bars = document.getElementById("chart-bars")
    console.log(chart_bars)

    let icons = document.getElementsByTagName("i")
    console.log(icons)

    let cards = document.getElementsByClassName("card")
    console.log(cards)
};


runScripts();


let modifyText = () => {
    let listofP = document.getElementsByTagName("p")
    let elementP = listofP[3] 

    elementP.innerHTML = "dinero actual"

    let listofH4 = document.getElementsByTagName("h4")
    let elementH4 = listofH4[0] 

    elementH4.innerHTML = "$301k"


}

modifyText()





let updateData = () =>{

    
  let data = [{
    title: 'Usuarios actuales',
    value: '3,200'
  },
  {
    title: 'Nuevos clientes',
    value: '4,215'
  },
  {
    title: 'Ventas',
    value: '$121,520'
  }];  

  let [ users, clients, sales ] = data;

  let {title:title_users, value:value_users} = users;
  let {title:title_clients, value:value_clients} = clients;
  let {title:title_sales, value:value_sales} = sales;


  let message_users =  `<p class="text-sm mb-0 text-capitalize">${title_users}</p>
  <h4 class="mb-0">${value_users}</h4>`;
  let message_clients =  `<p class="text-sm mb-0 text-capitalize">${title_clients}</p>
  <h4 class="mb-0">${value_clients}</h4>`;
  let message_sales =  `<p class="text-sm mb-0 text-capitalize">${title_sales}</p>
  <h4 class="mb-0">${value_sales}</h4>`;
  

  let listOfElements = document.getElementsByClassName("text-end pt-1");

  let [ , second, third, fourth ] = listOfElements;

  second.innerHTML = message_users
  third.innerHTML = message_clients
  fourth.innerHTML = message_sales




}
updateData()


let updateChanges = () => {
      // CAMBIOS 2
  let cambios = [
    {
      valor_previo: 250,
      valor_actual: 301,
      mensaje_tiempo: 'que la semana anterior'
    },
    {
      valor_previo: 3510,
      valor_actual: 3200,
      mensaje_tiempo: 'que la semana anterior'
    },
    {
      valor_previo: 3920,
      valor_actual: 4215,
      mensaje_tiempo: 'que ayer'
    },
    {
      valor_previo: 110200,
      valor_actual: 121520,
      mensaje_tiempo: 'que ayer'
    }
  ]
  
//'<p class="mb-0"><span class="text-sm ${clase_cambio} font-weight-bolder"> 
//${porcentaje_de_cambio} </span> ${mensaje_tiempo} </p>'
  

  let [value1, value2, value3, value4] = cambios

  let {valor_previo:Vp1, valor_actual:Va1, mensaje_tiempo:Mt1} = value1;
  let {valor_previo:Vp2, valor_actual:Va2, mensaje_tiempo:Mt2} = value2;
  let {valor_previo:Vp3, valor_actual:Va3, mensaje_tiempo:Mt3} = value3;
  let {valor_previo:Vp4, valor_actual:Va4, mensaje_tiempo:Mt4} = value4;


  let porcentaje_de_cambio= (valor_actual, valor_previo) => {
    let valor = (valor_actual-valor_previo)*100/valor_previo
    return Math.round((valor + Number.EPSILON) * 100) / 100
  };

  let clase_cambio = (porcentaje_De_Cambio) => {
    resultado  = (porcentaje_De_Cambio > 0)? "text-success":"text-danger";
    return resultado
  };


  let message_value1 = `<p class="mb-0"><span class="text-sm ${clase_cambio(porcentaje_de_cambio(Va1, Vp1))} 
  font-weight-bolder">${porcentaje_de_cambio(Va1, Vp1)} </span> ${Mt1} </p> `

  let message_value2 = `<p class="mb-0"><span class="text-sm ${clase_cambio(porcentaje_de_cambio(Va2, Vp2))}
   font-weight-bolder">${porcentaje_de_cambio(Va2, Vp2)} </span> ${Mt2} </p> `

  let message_value3 = `<p class="mb-0"><span class="text-sm ${clase_cambio(porcentaje_de_cambio(Va3, Vp3))}
   font-weight-bolder">${porcentaje_de_cambio(Va3, Vp3)} </span> ${Mt3} </p> `
   
  let message_value4 = `<p class="mb-0"><span class="text-sm ${clase_cambio(porcentaje_de_cambio(Va4, Vp4))}
   font-weight-bolder">${porcentaje_de_cambio(Va4, Vp4)} </span> ${Mt4} </p> `

  let listOfValues = document.getElementsByClassName("card-footer p-3")

  let [ one , sec, thir, four ] = listOfValues;

  one.innerHTML = message_value1
  sec.innerHTML = message_value2
  thir.innerHTML = message_value3
  four.innerHTML = message_value4

}
updateChanges()


