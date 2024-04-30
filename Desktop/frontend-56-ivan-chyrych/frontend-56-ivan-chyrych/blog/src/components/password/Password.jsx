import { React, useState } from 'react'

export const Password = () => {
  const [password, setPassword] = useState('')

  return (
    <div className="form-group " >
      <label
      >Password</label>
      <input
        onChange={(event) => setPassword(event.target.value)}
        value={password}
        type="password"
        className="form-control"
        placeholder="Password"
      />
    </div >
  )
}
