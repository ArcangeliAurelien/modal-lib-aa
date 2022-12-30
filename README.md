# modal-lib-aa

## Description

Modal plugin a library of React components created using `create-react-app`.

## Installation

Use the command:

`npm install modal-lib-aa`

or

`yarn add modal-lib-aa`

## How to use it ?

1. Import the plugin:

    `import ModalLibAA from "modal-lib-aa"`

2. Use this code:

    ```
    const [openModal, setOpenModal] = useState(false)

    ```

3. Return the modal:

```
{openModal && <ModalLibAA
    openModal={openModal}
    setOpenModal={setOpenModal}
    modalStyle={modalStyle}
    messageStyle={messageStyle}
    message="Le message de votre modale"
    closeModalStyle={closeModalStyle}
/>}

```

**You can custom the modal if you want**