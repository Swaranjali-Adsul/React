import logo from './logo.svg';
import './App.css';
import Car from './components/car'
import Carprops from './components/carprops'
import Post_list from './components/post_list'
import Post_table from './components/post_table'
import Posts from './components/Posts'
function App() {
  const posts = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optioreprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita etcum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autemsunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolorbeatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihilmolestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisinulla",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi autad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porroeius odio et labore et velit aut",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autemassumenda provident rerum culpa\nquis hic commodi nesciunt rem teneturdoloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sitautem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest auttenetur dolor neque",
    },
    {
      userId: 1,
      id: 6,
      title: "dolorem eum magni eos aperiam quia",
      body: "ut aspernatur corporis harum nihil quis providentsequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo abreprehenderit accusantium quas\nvoluptate dolores velit et doloremquemolestiae",
    },
    {
      userId: 1,
      id: 7,
      title: "magnam facilis autem",
      body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim quiquis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut seqeos ea sed quas",
    },
    {
      userId: 1,
      id: 8,
      title: "dolorem dolore est ipsam",
      body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animisint suscipit qui sint possimus cum\nquaerat magni maioreexcepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
    },
    {
      userId: 1,
      id: 9,
      title: "nesciunt iure omnis dolorem tempora et accusantium",
      body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniamautem ut quam aut nobis\net est aut quod aut provident voluptas autemvoluptas",
    },
  ];
  
return(
  
  
<>
<div>
<h1 align="center">Question 1</h1>
 <Car/> 
<br/><br/>
 <h1 align="center">Question 2</h1>
<Carprops car ={ {
    model: 'i20',
    company: 'Hyundai',
    price: 20,
    configuration: {
     color: 'gray',
     fuel: 'petrol',
     cylinder: 4,
     fuelTankCapacity: 37,
     mileage: {
     city: 14,
     highway: 20,
     },
    },
    features: ['touch screen', 'bluetooth', 'alloy wheels', 'powersteering'],
}
}
  />



<h1 align="center">Question 3 1.List Structure</h1><br/><br/>


  <Post_list />
  <h1 align="center">Question 3 2.Table Structure</h1><br/><br/>

  <Post_table/>

  <h1 align="center">Question 4 </h1><br/><br/>

  <Posts posts={posts}/>
</div>
</>
)
}

export default App;
