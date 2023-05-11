import { Tabs, Button } from 'antd';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: `Açıklama`,
    children: `Ella Bella Bingo, dostlukları tehlikede olan Ella Bella ve Henry'nin hikayesini konu ediyor. Ella Bella ve Henry, tüm zamanlarını birlikte geçiren iki yakın arkadaştır. Ancak havalı bir genç olan Johnny'nin mahalleye taşınmasıyla iki arkadaşın dostluğu tehlikeye girer. Ella Bella, Johnny ile Henry'nin yakınlaşmasından rahatsız olur. En iyi arkadaşını kaybedeceğini düşünen Ella Bella, Henry'den kendisi ve Johnny arasında bir seçim yapmasını ister. Henry, kimseyi incitmek istemez ve ortadan kaybolur. Ella Bella, arkadaşlığını kurtarmak için düşmanı Johnny'nin de yardımıyla Henry'yi bulmak için yola koyulur.

    `,
  },
  {
    key: '2',
    label: `Filmin Kadrosu`,
    children: `Yönetmen:Atle Solberg Blakseth, Frank Mosvold `,
  },
 
];

const Film2 = () =><div>
    <img  src={process.env.PUBLIC_URL + '/images/film1.jpg'} />  
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    <Button type="primary">Bilet Al</Button> 
</div> 
export default Film2;