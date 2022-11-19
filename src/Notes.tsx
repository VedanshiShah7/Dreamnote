import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import {
  Flex,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Tag,
  VStack,
  HStack,
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useEditableControls,
  ButtonGroup,
  Editable,
  EditablePreview,
  IconButton,
  EditableTextarea,
} from '@chakra-ui/react';
import _ from 'lodash';
import React, { useCallback, useState } from 'react';
import Synthesis from './Synthesis';
import defaultNotes from './defaultNotes';
import { Note } from './App';

function NoteModal({
  note,
  isOpen,
  close,
  updateNote,
}: {
  note: Note;
  isOpen: boolean;
  close: () => void;
  updateNote: (note: Note) => void;
}) {
  const [value, setValue] = useState(note.text);
  function EditableControls() {
    const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } =
      useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent='flex-end' size='sm'>
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent='flex-end'>
        <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
      </Flex>
    );
  }
  return (
    <Modal isOpen={isOpen} onClose={close}>
      <ModalOverlay />
      <ModalContent minWidth='50rem'>
        <ModalHeader>{note.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Editable
            defaultValue={note.text}
            fontSize='md'
            isPreviewFocusable={false}
            onSubmit={() => updateNote({ ...note, text: value })}>
            <EditablePreview noOfLines={15} />
            <EditableTextarea
              value={value}
              onChange={e => {
                setValue(e.target.value);
              }}
              minHeight='20rem'
              minWidth='20rem'
            />
            <EditableControls />
          </Editable>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

function NoteCard({ note, updateNote }: { note: Note; updateNote: (note: Note) => void }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Card bg='purple.100'>
        <CardHeader>
          <Heading size='md'>{note.title}</Heading>
        </CardHeader>
        <CardBody onClick={onOpen}>
          <Text pt='2' fontSize='sm' maxWidth='20rem' noOfLines={10}>
            {note.text}
          </Text>
        </CardBody>
        <CardFooter justifyContent='space-between'>
          <HStack>
            {note.tags.map(tag => (
              <Tag size='md' colorScheme='cyan'>
                {tag}
              </Tag>
            ))}
          </HStack>
          <Synthesis note={note} />
        </CardFooter>
      </Card>
      <NoteModal note={note} isOpen={isOpen} close={onClose} updateNote={updateNote} />
    </>
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
    <Box bg='purple.200' p={4} mr={1} h='100vh'>
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
    </Box>
  );
}

// checks that s2 contains all elements of s1
function containsAll(s1: string[], s2: string[]): boolean {
  return s1.length === _.intersection(s1, s2).length;
}

function Notes() {
  const [notes, setNotes] = useState(defaultNotes);
  const updateNote = useCallback(
    (note: Note) => {
      setNotes(oldNotes => oldNotes.map(n => (n.id === note.id ? note : n)));
    },
    [setNotes],
  );

  const allTags = Array.from(new Set(notes.flatMap(note => note.tags)));
  const [tags, setTags] = useState<string[]>([]);
  return (
    <HStack alignItems='flex-start'>
      <Tags tags={tags} setTags={setTags} allTags={allTags} />
      <Flex wrap='wrap' gap={5} p={4} justifyContent='center'>
        {notes
          .filter(n => containsAll(tags, n.tags))
          .map(note => (
            <NoteCard note={note} updateNote={updateNote} />
          ))}
      </Flex>
    </HStack>
  );
}

export default Notes;
