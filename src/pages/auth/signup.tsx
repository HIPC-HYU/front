import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    TextField,
    Button,
    Container,
    Typography,
    Box
} from '@mui/material';

interface FormProps {
    id: string;
    password: string;
    name: string;
    email: string;
    handle: string;
}

const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormProps>({
        id: '',
        password: '',
        name: '',
        email: '',
        handle: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/auth/signup', formData);
            console.log('회원가입 성공:', response.data);
            navigate('/signin')
        } catch (error) {
            console.error('회원가입 실패:', error);
        }
    };

    return (
        <div className='min-h-screen pt-20'>
            <Container maxWidth="sm" className="mt-10">
                <Box className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <Typography variant="h4" className="pb-6 text-center text-gray-700">
                        회원가입
                    </Typography>
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
                        <TextField
                            fullWidth
                            label="이름"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="이메일"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="백준 id"
                            name="handle"
                            value={formData.handle}
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
                            회원가입
                        </Button>
                    </form>
                </Box>
            </Container>
        </div>
    );
};

export default SignUp;