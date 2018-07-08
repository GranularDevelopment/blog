---
title: Relay Commands 
date: "2018-07-07T04:12:03.284Z"
---

The RelayCommand is a fairly simply and succesul way to decouple an event from its handler. The problem we are trying 
to avoid is the tight coupling of a UI element that is declared in XAML with the attached method in the code-behind.

Here is an example:

```csharp
<!-- Xaml !-->
<Button x:Name="PressMeButton"
        Text="Press Me!"
        Pressed="PressMeButton_Pressed"
        Clicked="PressMeButton_Clicked"/>


// Code-Behind

private void PressMeButton_Pressed(object sender, EventArgs e)
{
   (sender as Button).Text = "You pressed me!";
}

private void PressMeButton_Clicked(object sender, EventArgs e)
{
   (sender as Button).Text = "I was just clicked!";
}

```
Using a command will allow you to bind a UI element using XAML data-binding. This ensures
the commponents are loosely coupled and avoids the risk of creating a memory leak.

### What's a Command?
Commands are an implementation of the ICommand interface. The ICommand interface has three methods:

CanExecute(Object)
Defines the method that determines whether the command can execute in its current state.
If the return value is true, the command can be executed. When used with XAML, the 
command will be automatically be disabled if CanExecute returns false.  

Execute(Object)
Defines the method to be called when the command is invoked. This method is called when the command is
fired.

CanExecuteChanged
Occurs when changes occur that affect whether or not the command should execute. In XAML, the instance of ICommand is bound through the control's Command property via it's data-binding. Raising the CanExecuteChanged event willinvoke the CanExecute method, and the control will be enabled or disabled.

### Here is an example

```csharp 
 public class RelayCommand : ICommand
    {
        private readonly Action _execute;
        private readonly Func<bool> _canExecute;

        public event EventHandler CanExecuteChanged;
        public RelayCommand(Action execute) : this(execute, null) { }

        public RelayCommand(Action execute, Func<bool> canExecute)
        {
            this._execute = execute ?? throw new ArgumentNullException("execute");
            this._canExecute = canExecute;
        }

        public bool CanExecute(object parameter) => _canExecute == null || _canExecute();
        public void Execute(object parameter) => _execute();
        public void OnCanExecuteChanged() => CanExecuteChanged?.Invoke(this, EventArgs.Empty);
    }

    public class RelayCommand<T> : ICommand
    {
        private readonly Action<T> _execute;
        private readonly Func<T, bool> _canExecute;

        public event EventHandler CanExecuteChanged;
        public RelayCommand(Action<T> execute) : this(execute, null) { }

        public RelayCommand(Action<T> execute, Func<T, bool> canExecute)
        {
            this._execute = execute ?? throw new ArgumentNullException("execute");
            this._canExecute = canExecute;
        }

        public bool CanExecute(object parameter) => _canExecute == null || _canExecute((T)parameter);
        public void Execute(object parameter) => _execute((T)parameter);
        public void OnCanExecuteChanged() => CanExecuteChanged?.Invoke(this, EventArgs.Empty);
    }
```

### Non Asynchronous Command 
#### XAML

```xml
 <ContentPage.ToolbarItems>
        <ToolbarItem Command="{Binding MenuSelectedCommand}" Text="Menu" Icon="ic_action_menu.png"/>
 </ContentPage.ToolbarItems>
```

#### Code Behind

```csharp
 MenuSelectedCommand = new RelayCommand(MenuSelected);
```

### Asynchronous Command
#### XAML

```xml
  <Image HorizontalOptions="Center" WidthRequest="200" HeightRequest="200" Source="{Binding UploadImageSource}" >
        <Image.GestureRecognizers>
               <TapGestureRecognizer Command="{Binding StartUploadCommand}" />
        </Image.GestureRecognizers>
  </Image>
```

#### Code Behind
```csharp
StartUploadCommand = new RelayCommand(async () => { await StartUploadAsync(); });
```

### Conclusion
In conclusion using commands encourages a clean workflow when developing. The UI can be modified with different
controls without having to change the command in the view model.
