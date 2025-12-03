@echo off
title MANTRA Auto-Deployer
color 0b

echo ========================================================
echo               MANTRA AUTO-DEPLOYER
echo ========================================================
echo.
echo [1/3] Menyiapkan file untuk upload...
git add .

echo.
echo [2/3] Menyimpan perubahan...
set /p commit_msg="Masukkan catatan update (contoh: Update Pricing): "
git commit -m "%commit_msg%"

echo.
echo [3/3] Mengirim ke GitHub & Vercel...
git push

echo.
echo ========================================================
echo  SUKSES! Website Anda sedang di-update oleh Vercel.
echo  Cek status di dashboard Vercel Anda.
echo ========================================================
echo.
pause
