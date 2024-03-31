import { useState } from "react";
import { Form, useNavigate, useNavigation } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    let data = { email, password };

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const dashboardPath = '/dashboard';
        alert("Login Successfull...!!!");
        setEmail("");
        setPassword("");
        console.log(response)
        navigate(dashboardPath);
      } else {
        alert("Login failed");
        // Handle login failure, show error message, etc.
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div class="flex justify-center items-center min-h-screen">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 class="text-3xl font-bold mb-6 text-center text-white">
          <span class="bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text">
            LogIn
          </span>
        </h2>
        <Form onSubmit={onSubmit}>
          <div class="mb-6">
            <label
              for="email"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              <i class="fas fa-envelope mr-2"></i>Email
            </label>
            <div>
              <input
                id="email"
                type="email"
                class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              <i class="fas fa-lock mr-2"></i>Password
            </label>
            <div>
              <input
                id="password"
                type="password"
                class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <div class="flex items-center justify-center">
            <button
              type="submit"
              class="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              LogIn
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
