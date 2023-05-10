import './App.css'
import {TwitterFollowCard} from './twitterFollowcard.jsx'
export function App(){
    const formatUserName=(userName)=>`@${userName}`
    const users=[
        {
            userName:"ignacio",
            name:"Ignacion Jimenez",
            initialIsFollowing:true
        },
        {
            userName:"juanj",
            name:"Juan Miguel",
            initialIsFollowing:false
        }
    ]
    return(<section className="App">
        {users.map((user)=>{
            const {userName,name,initialIsFollowing}=user
            return(<TwitterFollowCard
                key={userName}
                formatUserName={formatUserName}
                initialIsFollowing={initialIsFollowing}  
                userName={userName} 
                name={name}
            />)
        })}
        
    </section>)
}
