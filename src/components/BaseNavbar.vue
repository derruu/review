<script setup>

    import { reactive, ref } from 'vue';
    import { RouterLink, useRouter } from 'vue-router';
    import { useAuthRepository } from '../composables/useAuthRepository';

    const userData = JSON.parse(localStorage.getItem('user'));
    
    const repository_auth = useAuthRepository();
    const router = useRouter()
    
    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('access_token');
        repository_auth.logout();
        router.replace({name: 'Login'})
    }

    const excerpt = (text, maxLength = 10, indicator = "...") => {
        let textCopy = text;
        
        if (textCopy.length > maxLength) {
            textCopy = textCopy.substring(0, maxLength) + indicator;
        }
        return textCopy
    }
</script>

<template>    
<div class="mx-auto ">
        <div class="bg-[#4fc4cf]">
            <nav class="flex justify-end shadow-lg">
                <p class="mr-auto px-10 py-5 text-3xl font-Righteous select-none">RESTO|CUYY</p>
                <ul class="flex px-20 py-5 gap-10 font-medium">
                    <RouterLink to="/restos" class="hover:underline select-none font-Poppins  hover:text-[#fbdd74] duration-500 text-[#272343]">Home</RouterLink>
                    <RouterLink to="/create" class="hover:underline select-none font-Poppins  hover:text-[#fbdd74] duration-500 text-[#272343]">Add Resto</RouterLink>
                    <RouterLink to="/profile" class="hover:underline select-none font-Poppins  hover:text-[#fbdd74] duration-500 text-[#272343]">Account</RouterLink>
                    <button @click="logout" class="hover:underline select-none font-Poppins  hover:text-[#fbdd74] duration-500 pb-3 text-[#272343]">logout
                    </button>
                </ul>
            </nav>
        </div>
</div>
</template>