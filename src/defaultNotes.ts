import { Note } from "./App";

const defaultNotes: Note[] = [
  {
    title: 'Note 1',
    text: 'RSA (Rivest-Shamir-Adleman) is a public-key cryptosystem that is widely used for secure data transmission. It is also one of the oldest. The acronym "RSA" comes from the surnames of Ron Rivest, Adi Shamir and Leonard Adleman, who publicly described the algorithm in 1977. An equivalent system was developed secretly in 1973 at GCHQ (the British signals intelligence agency) by the English mathematician Clifford Cocks. That system was declassified in 1997. In a public-key cryptosystem, the encryption key is public and distinct from the decryption key, which is kept secret (private). An RSA user creates and publishes a public key based on two large prime numbers, along with an auxiliary value. The prime numbers are kept secret. Messages can be encrypted by anyone, via the public key, but can only be decoded by someone who knows the prime numbers. The security of RSA relies on the practical difficulty of factoring the product of two large prime numbers, the "factoring problem". Breaking RSA encryption is known as the RSA problem. Whether it is as difficult as the factoring problem is an open question.[3] There are no published methods to defeat the system if a large enough key is used. ',
    id: '1',
    tags: ['tag1', 'tag2'],
  },
  {
    title: 'Note 2',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, et natus! Quasi eveniet nobis voluptas accusantium placeat, maxime sint facilis recusandae perferendis! Qui tempora cum eius, consequuntur quae commodi, non expedita, nobis magni ipsam eos eveniet! Est similique quas omnis cum eos, tempora quam quisquam natus deserunt unde reiciendis nam?',
    id: '2',
    tags: ['tag1', 'tag3'],
  },
  {
    title: 'Note 3',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, et natus! Quasi eveniet nobis voluptas accusantium placeat, maxime sint facilis recusandae perferendis! Qui tempora cum eius, consequuntur quae commodi, non expedita, nobis magni ipsam eos eveniet! Est similique quas omnis cum eos, tempora quam quisquam natus deserunt unde reiciendis nam?',
    id: '3',
    tags: ['tag3'],
  },
  {
    title: 'Note 4',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, et natus! Quasi eveniet nobis voluptas accusantium placeat, maxime sint facilis recusandae perferendis! Qui tempora cum eius, consequuntur quae commodi, non expedita, nobis magni ipsam eos eveniet! Est similique quas omnis cum eos, tempora quam quisquam natus deserunt unde reiciendis nam?',
    id: '4',
    tags: ['tag3', 'tag4'],
  },
  {
    title: 'Note 5',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, et natus! Quasi eveniet nobis voluptas accusantium placeat, maxime sint facilis recusandae perferendis! Qui tempora cum eius, consequuntur quae commodi, non expedita, nobis magni ipsam eos eveniet! Est similique quas omnis cum eos, tempora quam quisquam natus deserunt unde reiciendis nam?',
    id: '5',
    tags: ['tag2', 'tag4'],
  },
];
export default defaultNotes;