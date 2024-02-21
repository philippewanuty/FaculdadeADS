@echo off
setlocal enabledelayedexpansion

for /l %%i in (1, 1, 16) do (
    md "Aula 0%%i -\Slide"
    echo. > "aula 0%%i -\Notes.md"
)
