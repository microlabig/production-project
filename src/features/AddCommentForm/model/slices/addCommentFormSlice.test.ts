import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';
import { AddCommentFormSchema } from '../types/addCommentFormSchema';

describe('addCommentFormSlice.test', () => {
    test('test setText', () => {
        const state: DeepPartial<AddCommentFormSchema> = {};

        expect(addCommentFormReducer(state as AddCommentFormSchema, addCommentFormActions.setText('text'))).toEqual({
            text: 'text',
        });
    });
});
