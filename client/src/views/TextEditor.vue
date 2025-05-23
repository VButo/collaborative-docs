<template>
    <div class="container">
        <div ref="editor"></div>
    </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import io from 'socket.io-client'
import Quill from "quill"
import "quill/dist/quill.snow.css"


const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ align: [] }],
    ["image", "blockquote", "code-block"],
    ["clean"],
]

const editor = ref(null)
const socket = ref(null)

onMounted(()=> {
    new Quill(editor.value, {theme: "snow", modules: { toolbar: TOOLBAR_OPTIONS }})
    socket.value = io("http://localhost:3001")

    socket.value.on("connect", () => {
        console.log("Connected to server!")
    })
})

onUnmounted(() => {
    if(socket.value){
        socket.value.disconnect()
    }
})
</script>

<style scoped>
</style>