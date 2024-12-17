import Showcase from '../components/Showcase'
import Box from '../components/Box'
import Footer from '../components/Footer'
import Paragraphs from '../components/Paragraphs'

const Home = () => {
  return (
    <div>
      <Showcase heading="Welcome to Roman's Universe" text="This website is where you will learn everything about me. I was really intrested with coding at the age of 10. I first used a game engine called Scratch but then my mom and dad said me to learn html and css and learn some web development instead. I was pretty thankful to that so here I am making my own website!" bolded="Warning:Maybe contains Spoliers or offensive words."/>
      <Box heading="GRASSLANDS! A PLATFORMER!" text="A simple Platformer game which takes place in grasslands the code and art were by me. Thanks to TheFatRat for the song JACKPOT" image="./assets/Screenshot 2024-10-09 at 8.05.17 pm.png" link="https://scratch.mit.edu/projects/1071930537/"/>
      <Box heading="BLACK AND WHITE A PLATFORMER" text="A simple Platformer which take you into an area which is black and white. It is kind of grey but that doesn't matter I think. Code and art by me. Music by bubblebee3 for the music!" image="./assets/Screenshot 2024-10-10  at 8.05.02 pm.png" link="https://scratch.mit.edu/projects/1071154134/"/>
      <Box heading="COLORS! A PLATFORMER" text="A simple Platformer which takes you into an area which is colorful. It will change color the next level you move to. Code and art by me. Music by -Xaf-" image="./assets/Screenshot 2024-10-10  at 8.19.04 pm.png" link="https://scratch.mit.edu/projects/1074007382/"/>
      <p className="centered">More in the portfolio...</p>
      <Paragraphs heading="About me" text="I pretty much is a ten year old boy. I really liked coding, drawing and music. I can sometimes be a devious trickster. I am really creative but sometimes I get too lazy to come up with ideas lol. Also in my scratch account no advertisment or any hates or they will be reported. Oh yeah just because I like music and talented at it does NOT mean that I am a composer remember that I will have the others in the ABOUT tab" />
      <Paragraphs heading="Game Development and design" text="I always wanted my games to look good. Game devs says you should always work with the player mechanics first and others before moving on to the design. However, I always make the design first as I like working on a game that looks good during development so I always put on mountains to all my games making them look good too. I always had to choose wisely in fonts as scratch's fonts are limited. I don't even know how to use photoshop tbh." />
      <Footer paragraph="Roman's Universe, Copyright &copy; 2024." contact_heading="Contact me" />
    </div>
  )
}

export default Home
