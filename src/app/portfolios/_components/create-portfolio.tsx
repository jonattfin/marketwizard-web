'use client';

import {useState} from "react";
import {Button, CloseButton, Dialog, Field, Input, Portal, Stack, Textarea} from "@chakra-ui/react";
import {useForm} from "react-hook-form";

export type CreatePortfolioProps = {
  onSubmit: (name: string, description: string, image: string) => Promise<void>;
}

interface FormValues {
  name: string
  description: string
  imageUrl: string
}

export default function CreatePortfolio({onSubmit: onSubmitForm}: CreatePortfolioProps) {
  const [open, setOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>()

  const onSubmit = handleSubmit(async (data) => {
    const {name, description, imageUrl} = data;
    await onSubmitForm(name, description, imageUrl);

    setOpen(false);
  })

  return (
    <>
      <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Dialog.Trigger asChild>
          <Button variant="outline" colorPalette={"orange"}>Create new portfolio</Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop/>
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Create new portfolio</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <form onSubmit={onSubmit}>
                  <Stack gap="4" align="flex-start" maxW="sm">
                    <Field.Root invalid={!!errors.name}>
                      <Field.Label>Portfolio name</Field.Label>
                      <Input {...register("name")} />
                      <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
                    </Field.Root>

                    <Field.Root invalid={!!errors.imageUrl}>
                      <Field.Label>Portfolio image</Field.Label>
                      <Input {...register("imageUrl")} />
                      <Field.ErrorText>{errors.imageUrl?.message}</Field.ErrorText>
                    </Field.Root>

                    <Field.Root invalid={!!errors.description}>
                      <Field.Label>Portfolio description</Field.Label>
                      <Textarea {...register("description")} />
                      <Field.ErrorText>{errors.description?.message}</Field.ErrorText>
                    </Field.Root>

                    <Button type="submit">Submit</Button>
                  </Stack>
                </form>
              </Dialog.Body>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm"/>
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  )
}