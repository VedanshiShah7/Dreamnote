import { Note } from "./App";

const defaultNotes: Note[] = [
  {
    title: 'RSA Notes',
    text: 'RSA (Rivest-Shamir-Adleman) is a public-key cryptosystem that is widely used for secure data transmission. It is also one of the oldest. The acronym "RSA" comes from the surnames of Ron Rivest, Adi Shamir and Leonard Adleman, who publicly described the algorithm in 1977. An equivalent system was developed secretly in 1973 at GCHQ (the British signals intelligence agency) by the English mathematician Clifford Cocks. That system was declassified in 1997. In a public-key cryptosystem, the encryption key is public and distinct from the decryption key, which is kept secret (private). An RSA user creates and publishes a public key based on two large prime numbers, along with an auxiliary value. The prime numbers are kept secret. Messages can be encrypted by anyone, via the public key, but can only be decoded by someone who knows the prime numbers. The security of RSA relies on the practical difficulty of factoring the product of two large prime numbers, the "factoring problem". Breaking RSA encryption is known as the RSA problem. Whether it is as difficult as the factoring problem is an open question.[3] There are no published methods to defeat the system if a large enough key is used. ',
    id: '1',
    tags: ['Computer Science', 'Cryptography'],
  },
  {
    title: 'Fast Transformers on CPUs',
    text: 'Most people are not very familiar with the concept of artificial intelligence (AI). As an illustration, when 1,500 senior business leaders in the United States in 2017 were asked about AI, only 17 percent said they were familiar with it.[1] A number of them were not sure what it was or how it would affect their particular companies. They understood there was considerable potential for altering business processes, but were not clear how AI could be deployed within their own organizations. Despite its widespread lack of familiarity, AI is a technology that is transforming every walk of life. It is a wide-ranging tool that enables people to rethink how we integrate information, analyze data, and use the resulting insights to improve decisionmaking. Our hope through this comprehensive overview is to explain AI to an audience of policymakers, opinion leaders, and interested observers, and demonstrate how AI already is altering the world and raising important questions for society, the economy, and governance. In this paper, we discuss novel applications in finance, national security, health care, criminal justice, transportation, and smart cities, and address issues such as data access problems, algorithmic bias, AI ethics and transparency, and legal liability for AI decisions. We contrast the regulatory approaches of the U.S. and European Union, and close by making a number of recommendations for getting the most out of AI while still protecting important human values.[2]',
    id: '2',
    tags: ['Artificial Intelligence', 'Computer Science'],
  },
  {
    title: 'Theory of Evolution',
    text: 'contemporaries believed that species were unchangeable, structures made due to will of the Divine Creator proposed that natural laws produced change/evolution over time never challenged the existence of a Divine Creator based his ideas on studies in S America and Galápagos Islands didn\'t publish his results for 16 years until Alfred Russel Wallace submitted similar theory independently The Descent of Man - argues that humans and apes have similar ancestors',
    id: '3',
    tags: ['Biology'],
  },
  {
    title: 'Cellular respiration',
    text: 'Cellular respiration is a series of chemical reactions that break down glucose to produce ATP, which may be used as energy to power many reactions throughout the body. There are three main steps of cellular respiration: glycolysis, the citric acid cycle, and oxidative phosphorylation. Glycolysis takes place in the cytosol, the citric acid cycle occurs in the mitochondrial matrix, and oxidative phosphorylation occurs on the inner mitochondrial membrane. The starting reactants of cellular respiration include glucose, ATP, and NAD+; and the final products include ATP and H2O. The rate-determining enzymes for cellular respiration include phosphofructokinase-1, pyruvate dehydrogenase, and isocitrate dehydrogenase. Diseases that affect cellular respiration typically disrupt one or more enzymes involved in the process, such as pyruvate kinase or succinyl-CoA-synthase.',
    id: '4',
    tags: ['Biology'],
  },
  {
    title: 'Photosynthesis',
    text: 'Most life on Earth depends on photosynthesis.The process is carried out by plants, algae, and some types of bacteria, which capture energy from sunlight to produce oxygen (O2) and chemical energy stored in glucose (a sugar). Herbivores then obtain this energy by eating plants, and carnivores obtain it by eating herbivores.During photosynthesis, plants take in carbon dioxide (CO2) and water (H2O) from the air and soil. Within the plant cell, the water is oxidized, meaning it loses electrons, while the carbon dioxide is reduced, meaning it gains electrons. This transforms the water into oxygen and the carbon dioxide into glucose. The plant then releases the oxygen back into the air, and stores energy within the glucose molecules.',
    id: '5',
    tags: ['Biology'],
  },
];
export default defaultNotes;