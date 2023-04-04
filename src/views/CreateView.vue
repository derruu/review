<script setup>
</script>
<template>
    <div class="bg-amber-400">
            <nav class="flex justify-end shadow-lg">
                <p class="mr-auto px-10 py-5 text-3xl font-Righteous select-none">RESTO|CUYY</p>
                <ul class="flex px-20 py-5 gap-10 font-medium">
                    <RouterLink to="/restos" class="hover:underline select-none font-Poppins  hover:text-white duration-500">Home</RouterLink>
                    <RouterLink to="/create" class="hover:underline select-none font-Poppins  hover:text-white duration-500">Add Resto</RouterLink>
                    <RouterLink to="/profile" class="hover:underline select-none font-Poppins  hover:text-white duration-500">Account</RouterLink>
                </ul>
            </nav>
        </div>
        <section class="col-span-full row-span-3 mx-10">
            <div class="min-h-screen p-44 pt-12">
                <div class=" bg-white h-full shadow-xl">
                    <p class="text-center pt-16 font-bold text-3xl border-b-2 mx-20">Add New Resto</p>
                    <form action="" class="p-12">
                        <div class="p-2 ml-9">
                            <div>
                                <label for="" class="mr-14 font-semibold text-xl">Resto Name</label>
                                <input type="text"
                                class=" border-2 bg-gray-50 rounded-lg w-full p-2 outline-none focus:ring-4 focus:ring-blue-300">
                            </div>
                            <div class="pt-7">
                                <label for="" class="mr-14 font-semibold text-xl">Address</label>
                                <input type="text"
                                class="border-2 bg-gray-50 rounded-lg w-full p-2 outline-none focus:ring-4 focus:ring-blue-300">
                            </div>
                            <div class="pt-7">
                                <label for="" class="mr-14 font-semibold text-xl">Image</label>
                                <input type="file"
                                class="border-2 bg-gray-50 rounded-lg w-full p-2 outline-none focus:ring-4 focus:ring-blue-300">
                            </div>
                            <div class="pt-7 pb-7">
                                <label for="" class="mr-7 font-semibold text-xl">description</label>
                                <input type="text"
                                class="border-2 bg-gray-50 rounded-lg w-full p-2 pb-16 outline-none focus:ring-4 focus:ring-blue-300">
                            </div>
                            <button type="submit" class="bg-blue-600 text-white p-2 ml-44 inline-block w-96
                            hover:bg-blue-800 rounded transition-colors duration-200">TAMBAHKAN</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
</template>