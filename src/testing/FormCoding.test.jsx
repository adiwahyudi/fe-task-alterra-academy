import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
 
import FormCoding from './FormCoding';
 
describe('FormPage', () => {
  test('renders Form component', () => {
    render(<FormCoding />);
    expect(screen.getByText(/Nama Lengkap:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
  });

  test('input text for name and email with false value', () => {
    render(<FormCoding />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: '4d1' },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: 'nsjo jsakdj' },
    });
    expect(screen.getByText('Nama Lengkap Harus Berupa Huruf')).toBeInTheDocument();
    expect(screen.getByText('Email Tidak Sesuai')).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama/)).toHaveValue('4d1');
    expect(screen.getByLabelText(/Email/)).toHaveValue('nsjo jsakdj');
  });

  test('input text for ideal value', () => {
    render(<FormCoding />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: 'Adi' },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: 'adi@mail.com' },
    });
    // expect(screen.getByText('Nama Pengarang Harus Berupa Huruf')).not.toBeInTheDocument();
    // expect(screen.getByText('Email Tidak Sesuai')).not.toBeInTheDocument();
    expect(screen.getByLabelText(/Nama/)).toHaveValue('Adi');
    expect(screen.getByLabelText(/Email/)).toHaveValue('adi@mail.com');
  });

  test('submit button with error', () => {
    render(<FormCoding />);
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: 'Book gedebug' },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: 'bookgedebugbugbug.com' },
    });
    fireEvent.submit(screen.getByText("Submit"))
    expect(window.alert).toBeCalledWith("Data Pendaftar Tidak Sesuai");
    expect(screen.getByLabelText(/Nama/)).toHaveValue('Book gedebug');
    expect(screen.getByLabelText(/Email/)).toHaveValue('bookgedebugbugbug.com');
  });
});