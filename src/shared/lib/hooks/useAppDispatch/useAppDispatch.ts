import { useDispatch } from 'react-redux';
import { AppDispatch } from 'shared/providers/store-provider';

export const useAppDispatch = () => useDispatch<AppDispatch>();
