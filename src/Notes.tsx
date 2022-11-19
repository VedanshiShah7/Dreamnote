import {
  Flex,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Tag,
  VStack,
  HStack,
} from '@chakra-ui/react';
import _ from 'lodash';
import { useCallback, useState } from 'react';

interface Note {
  title: string;
  text: string;
  id: string;
  tags: string[];
}

const notes: Note[] = [
  {
    title: 'Note 1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, et natus! Quasi eveniet nobis voluptas accusantium placeat, maxime sint facilis recusandae perferendis! Qui tempora cum eius, consequuntur quae commodi, non expedita, nobis magni ipsam eos eveniet! Est similique quas omnis cum eos, tempora quam quisquam natus deserunt unde reiciendis nam?',
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

function NoteCard({ note }: { note: Note }) {
  return (
    <Card>
      <CardHeader>
        <Heading size='md'>{note.title}</Heading>
      </CardHeader>
      <CardBody>
        <Text pt='2' fontSize='sm' maxWidth='20rem'>
          {note.text}
        </Text>
      </CardBody>
      <CardFooter justifyContent='space-between'>
        <HStack>
          {note.tags.map(tag => (
            <Tag size='md' colorScheme='purple'>
              {tag}
            </Tag>
          ))}
        </HStack>
        <HStack>
          <Button colorScheme='blue' ml='10px'>
            Edit
          </Button>
          <Button colorScheme='green' ml='10px'>
            Save
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
}

function Tags({
  tags,
  setTags,
  allTags,
}: {
  tags: string[];
  setTags: (tags: string[]) => void;
  allTags: string[];
}) {
  const toggleTag = useCallback(
    (tag: string) => {
      if (tags.includes(tag)) {
        setTags(tags.filter(t => t !== tag));
      } else {
        setTags([...tags, tag]);
      }
    },
    [tags, setTags],
  );
  return (
    <>
      <VStack justifyContent='flex-start'>
        <Heading minWidth='12rem' size='md'>
          Select Filter Tags
        </Heading>
        {allTags.map(tag => (
          <Tag
            size='lg'
            minW='6rem'
            justifyContent='center'
            key={tag}
            variant={tags.includes(tag) ? 'solid' : 'outline'}
            colorScheme='purple'
            onClick={() => toggleTag(tag)}>
            {tag}
          </Tag>
        ))}
      </VStack>
    </>
  );
}

// checks that s2 contains all elements of s1
function containsAll(s1: string[], s2: string[]): boolean {
  return s1.length === _.intersection(s1, s2).length;
}

function Notes() {
  const allTags = Array.from(new Set(notes.flatMap(note => note.tags)));
  const [tags, setTags] = useState<string[]>([]);
  return (
    <HStack alignItems='flex-start'>
      <Tags tags={tags} setTags={setTags} allTags={allTags} />
      <Flex wrap='wrap' gap={5} justifyContent='center'>
        {notes
          .filter(n => containsAll(tags, n.tags))
          .map(note => (
            <NoteCard note={note} />
          ))}
      </Flex>
    </HStack>
  );
}

export default Notes;
