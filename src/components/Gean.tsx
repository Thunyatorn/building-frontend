import { useState, useEffect } from "react";
import Link from "next/link";

export const Login = () => {
  return (
    <Link
      className="flex max-w-xs flex-col rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
      href="login"
      target="_blank"
    >
      <h3 className="text-2xl font-bold">what login❓</h3>
      <div className="text-lg">hahaha just joke</div>
    </Link>
  );
};

export const Register = () => {
  return (
    <Link
      className="flex max-w-xs flex-col rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
      href="register"
      target="_blank"
    >
      <h3 className="text-2xl font-bold">fr??? register</h3>
      <div className="text-lg">รอไปก่อน แฮร่</div>
    </Link>
  );
};

export const Rickroll = () => {
  return (
    <Link
      className="flex max-w-xs flex-col rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
      href="https://youtu.be/xvFZjo5PgG0"
      target="_blank"
    >
      <h1 className="text-3xl font-bold">how wa</h1>
      <div className="text-lg">external</div>
    </Link>
  );
};
