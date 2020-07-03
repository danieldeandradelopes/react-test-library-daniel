import React from 'react'
import { render, waitFor } from '@testing-library/react'
import Todo from './index'

describe('Test for Todo Component', () => {
    it('Should add new task when form has been submitted', async () => {
        // to rendering component
        const { getByTestId } = render(<Todo />)
        const fieldNode = await waitFor(
            () => getByTestId('form-field')
        )

        // renderizar o component
        // buscar o input
        // digitar no input
        // buscar no botão
        // clicar no botão
        // buscar a tabela
        // verificar se a tarefa foi adicionada na tabela


    })
})