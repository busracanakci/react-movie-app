
import { Tabs, Button } from 'antd';
const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: '1',
    label: `Açıklama`,
    children: `John Wick 4'te efsane seri kaldığı yerden devam ediyor ve Keanu Reeves, bir kez daha John Wick olarak geri dönüyor. John Wick, yüksek şurayı yenmek için kendine bir yol belirler. Ancak, özgürlüğünü kazanmadan önce, dünyadaki güçlü ittifaklarla ve eski arkadaşlarını birer düşmana dönüştüren güçlerle mücadele etmelidir. John Wick'in dünyası büyümeye devam ediyor ve riskler her zamankinden çok daha fazla...

    `,
  },
  {
    key: '2',
    label: `Filmin Kadrosu`,
    children: `Yönetmen:Chad Stahelski, Oyuncular: Donnie Yen, Keanu Reeves, Bill Skarsgård `,
  },
  
 
];
const Film1 = () => <div className='film-margin'>
<img  src={process.env.PUBLIC_URL + '/images/film2.jpg'} />  
<Tabs defaultActiveKey="1" items={items} onChange={onChange} />
<Button type="primary">Bilet Al</Button> 
</div>;
export default Film1;