import React, { useState } from 'react';
import axios from 'axios';
import {
    TextField,
    Button,
    Container,
    Typography,
    Box,
    Alert
} from '@mui/material';
import { Link } from 'react-router-dom';

interface SignInProps {
    id: string;
    password: string;
}

const SignIn: React.FC = () => {
    const [formData, setFormData] = useState<SignInProps>({
        id: '',
        password: ''
    });
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        try {
            const response = await axios.post('http://localhost:4000/auth/signin', formData);
            console.log('로그인 성공:', response.data);
            // 여기에 로그인 성공 후 처리 (예: 홈 페이지로 리다이렉트)
        } catch (error) {
            console.error('로그인 실패:', error);
            setError('로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.');
        }
    };

    return (
        <div className='min-h-screen pt-40'>
            <Container maxWidth="sm" className="pt-10 flex">
                <Box className="bg-white shadow-md rounded px-8 pt-10 pb-8 mb-4">
                    <Typography variant="h4" className="pb-8 text-center text-gray-700">
                        로그인
                    </Typography>
                    {error && (
                        <Alert severity="error" className="mb-4">
                            {error}
                        </Alert>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <TextField
                            fullWidth
                            label="아이디"
                            name="id"
                            value={formData.id}
                            onChange={handleChange}
                            required
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="비밀번호"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            variant="outlined"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            className="mt-4 bg-blue-500 hover:bg-blue-600"
                        >
                            로그인
                        </Button>
                    </form>
                    <div className='font-pretendard text-blue-600 mt-4 flex justify-end'>
                        <Link to={'/signup'}>회원가입</Link>
                    </div>
                </Box>
            </Container>
        </div>
    );
};

export default SignIn;