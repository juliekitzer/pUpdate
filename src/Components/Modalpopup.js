import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
function Modalpopup({item, handleClose, open}){
    return(
              <Dialog onClose={handleClose} open={open}>
                <DialogTitle>{item.dishname}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Price: ${item.price}
                    </DialogContentText>
                    <DialogContentText>
                        Description: {item.description}
                    </DialogContentText>
                    <DialogContentText>
                        Allergy Information: {item.allergyinformation}
                    </DialogContentText>
                </DialogContent>
              </Dialog>
        );
    }
        

export default Modalpopup;