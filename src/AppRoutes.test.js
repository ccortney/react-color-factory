import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function addColor(colorForm, name="purple", hex="#452348") {
    const nameInput = colorForm.getByLabelText("Color Name");
    const hexInput = colorForm.getByLabelText("Color Hex");
    fireEvent.change(nameInput, { target: {value: name}});
    fireEvent.change(hexInput, { target: {value: hex}});
    const button = colorForm.getByText("Add");
    fireEvent.click(button);
}


it('should render without crashing', () => {
  render(
      <MemoryRouter >
            <AppRoutes />
      </MemoryRouter>   
  );
});

it('should render all colors in list', () => {
    const colorList = render(
        <MemoryRouter initialEntries={["/colors"]}>
              <AppRoutes />
        </MemoryRouter>   
    );
    const colors = JSON.parse(localStorage.getItem("colors"));
    const colorNames = Object.keys(colors);

    for (let name of colorNames) {
        const linkElement = colorList.getByText(`${name}`);
        expect(linkElement).toBeInTheDocument();
    }
});

it('should render single color', () => {
    const color = render(
        <MemoryRouter initialEntries={["/colors/blue"]}>
              <AppRoutes />
        </MemoryRouter>   
    );
    const blueHeading = color.queryByText("blue");
    const redHeading = color.queryByText("red");
    expect(blueHeading).toBeInTheDocument();
    expect(redHeading).not.toBeInTheDocument();
});

it('should render new color form', () => {
    const form = render(
        <MemoryRouter initialEntries={["/colors/new"]}>
              <AppRoutes />
        </MemoryRouter>   
    );
    const addButton = form.queryByText("Add");
    expect(addButton).toBeInTheDocument();
});

it('should submit a new color when form is submitted', () => {
    const form = render(
        <MemoryRouter initialEntries={["/colors/new"]}>
              <AppRoutes />
        </MemoryRouter>   
    );

    addColor(form)

    const linkElement = form.getByText("purple");
    expect(linkElement).toBeInTheDocument();
});

it('should redirect to home if invalid route', () => {
    const colorPage = render(
        <MemoryRouter initialEntries={["/colors/invalid"]}>
              <AppRoutes />
        </MemoryRouter>   
    );

    const colorHeading = colorPage.queryByText("Color List")
    expect(colorHeading).toBeInTheDocument()

    const invalidHeading = colorPage.queryByText("invalid")
    expect(invalidHeading).not.toBeInTheDocument()
});


