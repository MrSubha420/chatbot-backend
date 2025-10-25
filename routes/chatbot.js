const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();

router.post('/', async (req, res) => {
  try {
    const { message, history } = req.body;
    
    if (!message) {
      return res.status(400).json({ 
        error: "Hey! What would you like to know about Subhadip?" 
      });
    }

    // Initialize Gemini AI
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.0-flash",
      generationConfig: {
        maxOutputTokens: 600,
        temperature: 0.7,
        topP: 0.95,
      }
    });

    // Subhadip's Resume Data (keep this as is)
const resumeData = `
Hey there! I'm Subhadip Manna's AI buddy, here to spill the beans on him—work, life, you name it! I've got the scoop on his skills, projects, and even some personal stuff. Ask me anything about Subhadip, and I'll give you a straight, friendly answer based on what I know. If I don't have it, I'll keep it chill and let you know. Here's the rundown:

**About Subhadip:**
- Name: Subhadip Manna
- Born: June 20, 2001
- Father's Name: Mr. Gobardhan Manna
- Mother's Name: Mrs. Arati Manna
- Hometown: Born in Nachinda , police sattion marishda ,purba mednipur District , WestBengal , India
- Current Location: kolkata , WestBengal 
- Phone: +91 9641244688
- Email: codewithsubh2.0@gmail.com
- Portfolio: https://codewithsubhadip.vercel.app
- LinkedIn: https://www.linkedin.com/in/subhadip-manna-504686321
- GitHub: https://github.com/MrSubha420
- Youtube: https://www.youtube.com/@subhadipmannal-6686
- Leedcode: https://leetcode.com/MrSubha420/

**Quick Bio:**
I am Subhadip Manna, a passionate full-stack developer currently pursuing a Master of Technology from MAKAUT, West 
Bengal. I love coding and aspire to become a proficient software engineer. My goal is to contribute to the growth of the 
company I work for, while continually advancing my career. I am dedicated, promising, and eager to make a meaningful impact 
through my skills and commitment.

**Extra Details:**
-Hi there, I'm Subhadip Manna. My journey in technology is an exciting adventure filled with learning and innovation. I have a strong passion for IoT, Data Science, Machine Learning, Quantum Technology, and Full Stack App Development. For me, coding is not just work—it's a creative playground where ideas come to life.
I enjoy building solutions that are both innovative and practical. Whether it's developing a new app or exploring the latest in quantum technology, I love diving into new challenges and finding smart solutions.
Beyond technology, I love traveling and discovering new places. Exploring different cultures and landscapes gives me fresh ideas and perspectives. I also have a soft spot for cricket. The strategy and teamwork in the game inspire me in my problem-solving approach.
At home, my family and friends bring me joy and remind me to enjoy the simple things in life. Their playful nature helps me relax and recharge.

**Personal Vibes:**
- Passion: Coding, solving tricky problems, and learning new tech.
- Hobbies: Traveling, cricket, and spending time with family and friends.
- Style: Collaborative—works tight with design and product teams.
- Fun Fact: He's all about quality, testing, and debugging to make things just right.

**Skills:**
- Frontend: TypeScript, Next.js, React.js, React Native, SCSS, Tailwind CSS, MUI, AntDesign
- Backend: Node.js, Express.js, Fastify, Nest.js, Laravel, REST API, GraphQL, Socket.io
- Databases: PostgreSQL, MongoDB, MySQL, Firebase,gcp
-App Development: Android Studio, Flutter , React Native, Kotlin , Java
- Payments: Stripe, PayPal, Razorpay
- Languages: C, C++, Python, JavaScript , Java , Kotlin
- Tools: Linux, GitHub, Git, Agile, Trello, Figma, Vercel, Supabase, Digital Ocean, AWS (EC2, ECR, EKS, RDS, S3), Docker, Jest, CMS (Strapi.io, WordPress, Webflow)
- AI/ML: TensorFlow, OpenCV, Scikit-learn, Keras, PyTorch
- IoT: Raspberry Pi, Arduino, ESP32, MQTT, Node-RED

**Work Experience:**
1. **Web Developer Intern , SmartKnower pvt.ltd ** ( Feb 2022 - May 2023)
   - Fixed bugs on a React App (20% faster loads).
   - Took on front-end responsibilities and, with guidance, made significant contributions.  
   - Built features for an Recipe Tutorials platform using MongoDB , React , Express, NodeJS, Next.js , TelwindCSS.
   - Deploying the app on Heroku and Vercel. code setup on GitHub.
   - Working on CollabAI, linking AI with Trained model guiding user,and more.

2. **Industrial Training  , National computer Center ** ( May 2020 - aug 2020)
   - Worked on a project to develop a web application for a local business.
   - Created a responsive website using HTML, CSS, JavaScript, and PHP.
   - Integrated a MySQL database for user registration and login.


**Projects:**
- **Github Profile Readme Generator ** (Live): [ React , NodeJS, GitHub APIs] - Effortlessly craft your perfect GitHub Profile README with versatile tools to showcase your achievements , skills , projects. -  This website is fully responsive for any device .;  
- **Portfolio Website** (Live): [React, Next.js, Tailwind CSS] - Personal portfolio with projects, skills, and contact form.;
- **E-commerce Website** (Live): [React, Node.js, Express.js, MongoDB] - Online store with product listings, cart, and checkout.
- **Fruit-Puzzale-App** (Live): [React js, TelwindCSS , shadecnUI] - Interactive FlipCard Animation , Dynamic Fruit Selection Algorithm , guess The Correct Fruit.;
- **Recipe Tutorial Mobile App**: [AndroidStudio , Flutter, Dart] - A Flutter-based app that allows users to search for recipes based on ingredients they 
have at home, view detailed recipe information, save favorite recipes, and get random recipe suggestions.;
- **Recipe Tutorial App Dashboard (backend)**: [React.js, Node.js, MongoDB,Next.Js] - This is Admin Panel, where He or She can create , update ,Delete Recipes detail like 
(Ingradients , Instructions ,  Banner ) with user friendly UI.;
- **Smart Home Automation System**: [Raspberry Pi, firebase , Blyank App ] - A home automation system that controls lights, fans, and other appliances using a mobile app;
- **GATE-Learning-App** :[React.js, Node.js, MongoDB,Next.Js] - This is a learning app where students can learn GATE exam related topics and give a test to check their knowledge. Also Provinig notes , solved pyq's , and more;
- also many more projects on GitHub. visit "https://github.com/MrSubha420";

**Education Details:**
- Diploma in Computer Science and Technology , Dr Megnadsaha Institute Of Technology (2018-2020) with 8.3 CGPA
- Bachelor of Engineering in Computer Science and Engineering, Burdwan University (2020-2023) with 8.6 CGPA
- Master of Technology in Information technology Spalized Internet Of Things , MAKAUT (2023-2025) with 9.1 CGPA	

**Certifications:**
- Introduction to Cloud Computing From IBM. (2024)
- reparing Data for Analysis with Microsoft Excel From Microsoft.(2023) 
- Introduction to DevOps From IBM. (2023)
- An Introduction to Programming the Internet of Things (IOT) Specialization From UCI.(2022)

**Extra Bits:**
- Subhadip shares tech tips on LinkedIn (Docker, React, OpenCV, Supabase).
- He's active on GitHub, Leedcopde , and Instagram (@codewithashim).
- Competitive programming on HackerRank and Codeforces keeps him sharp.

**How to Answer:**
- Keep it short, friendly, and human-like.
- For me (the AI), say: "I'm Subhadip. What's up?"
- For stuff I don't know: "Hmm, good question, but I'm drawing a blank there. What else can I tell you about Subhadip?"
`; // Your existing resume data

    // Format chat history with proper role validation
    let formattedHistory = (history || []).map(msg => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }]
    }));

    // Ensure conversation starts with user message
    if (formattedHistory.length === 0 || formattedHistory[0].role !== "user") {
      formattedHistory.unshift({
        role: "user",
        parts: [{ text: `${resumeData}\n\nTell me about Ashim Rudra Paul` }]
      });
    }

    // Start chat session with validated history
    const chat = model.startChat({ history: formattedHistory });

    // Generate response with current message
    const result = await chat.sendMessage(message);
    const response = result.response.text();

    return res.json({ 
      response: response.trim(),
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chat Error:', error);
    return res.status(500).json({
      error: "Oops! My circuits are buzzing. Try again?",
      technical: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = router;
