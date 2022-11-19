import {
  Flex,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Tag,
  VStack,
} from '@chakra-ui/react';
import _ from 'lodash';
import React, { useState } from 'react';

interface Note {
  title: string;
  text: string;
  id: string;
  tags: string[];
}

const tags = ['tag1', 'tag2', 'tag3', 'tag4'];

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
      <CardFooter>
        <Button>Save</Button>
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Select Filter Tags</DrawerHeader>
          <DrawerBody>
            <VStack>
              {allTags.map(tag => (
                <Tag
                  size='lg'
                  key={tag}
                  variant={tags.includes(tag) ? 'solid' : 'outline'}
                  colorScheme='teal'>
                  {tag}
                </Tag>
              ))}
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
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
    <>
      <Tags tags={tags} setTags={setTags} allTags={allTags} />
      <Flex wrap='wrap' gap={5} justifyContent='center'>
        {notes
          .filter(n => containsAll(tags, n.tags))
          .map(note => (
            <NoteCard note={note} />
          ))}
      </Flex>
    </>
  );
}

export default Notes;
